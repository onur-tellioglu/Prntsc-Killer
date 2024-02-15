' Create a WshShell object
Set WshShell = CreateObject("WScript.Shell")

' Run the npm start command
WshShell.Run "cmd.exe /c npm start", 0, True