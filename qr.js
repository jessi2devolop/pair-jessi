/*
const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('5kA52X-5mHVN14hMO4NjKFn4wvXAF3LI')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: makeWASocket,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Getqr() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let session = makeWASocket({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			session.ev.on('creds.update', saveCreds)
			session.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
				  let jes = "JessiPairSession;"
			          let sessionjessi = fs.readFileSync(__dirname+`/temp/${id}/creds.json`);
					await delay(10000);
					const output = await pastebin.createPasteFromFile(__dirname+`/temp/${id}/creds.json`, "pastebin-js test", null, 1, "N");
					await session.sendMessage(session.user.id, {
					  text: `\n\n*Hey there! Welcome to JessiMD\n\nDon't share this code to anyone. \nUpload this file to your forked repository sessions folder. Click delopy button\n\nfrok repository ➬https://github.com/whiteshadowofficial/Jessi-md\n\nCopyright © 2021 All right reserved\n\nCʀᴇᴀᴛᴇᴅ Bʏ ᴍʀ.ᴡʜɪᴛᴇ ꜱʜᴀᴅᴏᴡ x ᴘʀᴇʙᴀᴛʜ_ꜱᴀᴠ- 2024\n\n`
					})
					await session.sendMessage(session.user.id, {
						text: jes+output.split('/')[3]
					})
					await session.sendMessage(session.user.id, { 
						document: sessionjessi, 
						mimetype: `application/json`, 
						fileName: `creds.json` 
					})
					
					await delay(100);
					await session.ws.close();
					// return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Getqr();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Getqr()
	//return //'qr.png', { root: "./" });
});
module.exports = router

*/

const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('5kA52X-5mHVN14hMO4NjKFn4wvXAF3LI')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: makeWASocket,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
	MessageType,
  MessageOptions,
  Mimetype
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Getqr() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let session = makeWASocket({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			session.ev.on('creds.update', saveCreds)
			session.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(10000);
					let jesname = "jessipair;"
					let messg = "\n\n*Hey there! Welcome to JessiMD\n\nDon't share this code to anyone. \nUpload this file to your forked repository sessions folder. Click delopy button\n\nfrok repository ➬https://github.com/whiteshadowofficial/Jessi-md\n\nCopyright © 2021 All right reserved\n\nCʀᴇᴀᴛᴇᴅ Bʏ ᴍʀ.ᴡʜɪᴛᴇ ꜱʜᴀᴅᴏᴡ x ᴘʀᴇʙᴀᴛʜ_ꜱᴀᴠ- 2024\n\n"
					let sessionjessi = fs.readFileSync(__dirname+`/temp/${id}/creds.json`);
					const output = await pastebin.createPasteFromFile(__dirname+`/temp/${id}/creds.json`, "pastebin-js test", null, 1, "N");
					await session.sendMessage(session.user.id, {
						text: messg+jesname+output.split('/')[3], 
						contextInfo: { 
            externalAdReply: {
                title: "Jessi-MD",
                body: "𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙱𝚘𝚝",
                thumbnailUrl: "https://tinyurl.com/24odlsqs",
                mediaType: 1,
                mediaUrl: "https://github.com/whiteshadowofficial/Jessi-md",
                sourceUrl: "https://github.com/whiteshadowofficial/Jessi-md",
            } 
        } 
					})
					await session.sendMessage(session.user.id, { document: sessionjessi, mimetype: `application/json`, fileName: `creds.json` })
					await delay(100);
					await session.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Getqr();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Getqr()
	//return //'qr.png', { root: "./" });
});
module.exports = router
