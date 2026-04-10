import DataSource from "./dataSource.js";

try {

    const ds = new DataSource('db/database.json');
  //  ds.create({
  //   author: "Александр Пушкин",
  //   title: "Евгений Онегин",
  //   description: "Роман в стихах"
  // });

  // ds.delete(8);

  const all = ds.getAll();// получить все записи объекта
  console.log('ALL', all);

  // const oneBrfore = ds.getOne(1);
  // console.log('ONE BEFORE:', oneBrfore);

  // ds.update(1, {description: 'Роман в стихах Онегин Евгений'})

  // const oneAfter = ds.getOne(1);
  // console.log('ONE AFTER:', oneAfter);


} catch (e) {
    console.error('Error detected:', e);
}

