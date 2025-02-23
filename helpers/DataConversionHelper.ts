export class DataConversionHelper {
    static base64ToTextString(base64String: string) {
        return Buffer.from(base64String, 'base64').toString('utf-8');
    }
}