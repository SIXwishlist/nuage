// GOOGLE DRIVE
// 1) enable the api: https://console.developers.google.com/apis/api/drive.googleapis.com/overview
// 2) create credentials: https://console.developers.google.com/apis/credentials/oauthclient

// DROPBOX
// 1) create an third party app: https://www.dropbox.com/developers/apps/create
//    -> dropbox api -> Full Dropbox -> whatever name you want ->
//    -> set redirect URI to https://example.com/login ->  

module.exports = {
    info: {
        host: 'application_url'
    },
    gdrive: {
        redirectURI: "application_url/login",
        clientID: "gdrive_client_id",
        clientSecret: "gdrive_client_secret"
    },
    dropbox: {
        clientID: "dropbox_client_id",
        redirectURI: "application_url/login"
    }
}
