
import { Email, checkInbox } from "gmail-getter";
import { DataConversionHelper } from "./DataConversionHelper";

export class EmailReader {
     
    static async getEmailMsg(query: string) {
        return await checkInbox({
            token: process.env.GMAIL_ACCESS_TOKEN!, 
            timeout: 15000, 
            step: 1500,
            query: query
        });
    }
    
    static getEmailMsgBody(emailMsg: Email | Email[] | null) {
        if(!emailMsg || !emailMsg['payload'])
            throw `Email Message is not found`;

        if (emailMsg['payload']['body']['size'] != 0) {
            return DataConversionHelper.base64ToTextString(emailMsg['payload']['body']['data']);
        } else {
            return DataConversionHelper.base64ToTextString(emailMsg['payload']['parts'][1]['body']['data']);
        }
    }

    static extractUrlFromEmailMsgHtml(bodyHtml: string, extraSufixRegex: string = '') {
        const urlMatchingRegex = new RegExp(`a\\s+href=["'](\\S+)["'].*${extraSufixRegex}`);
        const url = bodyHtml.match(urlMatchingRegex);

        if (!url)
            throw `URL could not be found in email message html using regex: "${urlMatchingRegex}"\n HTML:\n ${bodyHtml}`;

        return url[1];
    }

    static async getEmailMsgExtractUrl(query: string, extraSufixRegex: string = '') {
        const emailMsg = await this.getEmailMsg(query);
        const bodyHtml = this.getEmailMsgBody(emailMsg);
        return this.extractUrlFromEmailMsgHtml(bodyHtml, extraSufixRegex);
    }

}