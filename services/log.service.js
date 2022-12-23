import chalk from "chalk";
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed("ERROR") + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen("SUCCESS") + ' ' + message);
}

const printHelp  = () => {
    console.log(
        dedent`${chalk.bgCyan("HELP")}
        Без параматеров - ввывод погоды
        -s [CITY] для установки города
        -h для вывода помощью
        -t [API_KEY] для сохранения токена
        `
    );
}


const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlue('WEATHER')} Погода в городе ${res.name}
        ${icon}  ${res.weather?.[0].description}
        Температура:  ${res.main.temp} (Ощущается как ${res.main.fells_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}
        `
    );
};
export { printError, printSuccess, printHelp, printWeather };