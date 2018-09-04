const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

app.on('ready', function (  ) {
	//create window
	mainWindow = new BrowserWindow({});
	
	mainWindow.loadURL( url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: 'file',
		slashes: true
	}));
	
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	
	Menu.setApplicationMenu(mainMenu)
});

function createAddWindow(  )
{
	//create window
	addWindow = new BrowserWindow({
		width: 200,
		height: 300,
		title: 'Add test'
	});
	
	addWindow.loadURL( url.format({
		pathname: path.join(__dirname, 'addWindow.html'),
		protocol: 'file',
		slashes: true
	}));
}

const mainMenuTemplate = [
	{
		label: 'Пункт',
		submenu:[
			{
				label: 'Подключится'
			},
			{
				label: 'Обновить'
			},
			{
				label: 'Выйти',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click(){
					app.quit();
				}
			}
		]
	}
];