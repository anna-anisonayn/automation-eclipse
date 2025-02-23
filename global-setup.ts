import { getAccessToken } from 'gmail-getter'


async function globalSetup() {
  const accessTooken = process.env.GMAIL_ACCESS_TOKEN = await getAccessToken(
    process.env.GMAIL_CLIENT_ID!,
    process.env.GMAIL_CLIENT_SECRET!,
    process.env.GMAIL_REFRESH_TOKEN!
  )
  //console.log('global setup, accessTooken:', process.env.GMAIL_ACCESS_TOKEN)
}
export default globalSetup;