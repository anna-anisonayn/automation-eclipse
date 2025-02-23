import {test, expect} from '@playwright/test'
import { agentLoginPage } from '../../pages/AgentLoginPage';
import { uiContext } from '../../pages/UiContext';
import { agentSignUp } from '../../pages/AgentSignUp';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';
import { agentProfile } from '../../pages/AgentProfile';
import { faker } from "@faker-js/faker";



const first_name = faker.person.firstName()
const last_name = faker.person.lastName()
const agentEmail = DataProviderHelper.getAgentUserEmail()


test('Sign up Agent', async({browser}) => {
    const timestamp = DataProviderHelper.getTimestamp()

    await uiContext.setContext(browser);
    await agentSignUp.goto();
    await agentLoginPage.clickAcceptCookiesButton()
    await agentSignUp.fillEmail(agentEmail);
    await agentSignUp.fillPassword('Ec12345678!');
    await agentSignUp.fillRepeatPassword('Ec12345678!');
    await agentSignUp.selectCountry('Italy');
    await agentSignUp.clickAcceptTermsCheckbox();
    await agentSignUp.clickSignUpButton();
    await uiContext.page.waitForTimeout(10000);
 
    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${timestamp}`, )
    console.log("signUpUrl:", signUpUrl)
    await uiContext.page.waitForTimeout(2000);
    await uiContext.page.goto(signUpUrl);
    await uiContext.page.waitForTimeout(2000);
    await agentSignUp.clickGoPersonalAccount()
    await agentSignUp.fillEmail(agentEmail);
    await agentSignUp.fillPassword('Ec12345678!');
    await agentSignUp.clickSignInButton();
    await agentProfile.fillLastName(first_name);
    await agentProfile.fillFirstName(last_name);
    await agentProfile.clickSaveChangesButton();


//     // todo, add email not found case handdling 

//      const bodyText = DataConversionHelper.base64ToTextString(emailMsg!['payload']['parts'][1]['body']['data']);
//      console.log('bodyText::', bodyText)

//      if (bodyText) {
//          const urlMatchingRegex = /a\s+href=["'](\S+)["']/;
//     //     const signUpUrl = bodyText.match(urlMatchingRegex)[1]
//     //     console.log("signUpUrl:", signUpUrl)
//     // } else {
//     //     throw 'Message body is empty or undefined'

 })

