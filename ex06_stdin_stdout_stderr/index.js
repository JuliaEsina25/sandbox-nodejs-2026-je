import { stderr, stdin, stdout, exit, argv } from 'node:process';

// stdin.pipe(stdout); // перенаправление ввода в вывод

let data = '';

stdin.on('readable', () => {
    const chunk = stdin.read();
    if(chunk !== null) {
        data += chunk;
    }
    // console.log('r');
});

stdin.on('end', () => {
    console.log('Data;', data);
    // console.log('e');

   // throw new Error("!!!");// нада вернет код 1 (сама)

    stdout.write("Program Finished\n");
    // exit(0); // установка кода ответа  в 0

    stderr.write("Program Error\n");
    // exit(7); установка кода ответа в 7

    // console.log("Program Finished");
});

