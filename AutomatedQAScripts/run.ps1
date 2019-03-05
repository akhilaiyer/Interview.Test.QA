
echo "start---: install npm "
	npm install --save-dev

echo "start---: update protractor "
	Push-Location "node_modules\protractor\node_modules\.bin"
	.\webdriver-manager update #--out_dir "..\protractor\node_modules\webdriver-manager\selenium"

Pop-Location

echo "start---: new selenium server "
 npm run run-e2e

# now back to previous directory
Pop-Location
taskkill /im chromedriver* /f
