# Jira Default Comment Group Chrome Extension

## Why
Jira has comment groups but no way to set a default one.

## How
This is a Chrome extension that works on the single ticket and Kanban boards. It will automatically select the default comment group when you put your cursor in the comment box. For now you need to edit the `contentScript.js` file. Specifically the `groupName` and `projectIds` that you want this applied to.

## Install
You'll need to clone or download the repository somewhere to your computer where it can stay indefinitely as Chrome will pull directly from where it is and follow the instructions for installing an unpacked extension. https://developer.chrome.com/extensions/getstarted#unpacked