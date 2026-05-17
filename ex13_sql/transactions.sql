-- пример успешной транзакции
-- (выполняем запросы по очереди)
BEGIN;
INSERT INTO loans (user_id, book_id, quantity) values (1, 4, 6);
INSERT INTO loans (user_id, book_id, quantity) values (2, 4, 6);
-- на этом этапе смотрим содержимое таблицы loans (там не должно быть этих данных)
COMMIT; -- подтверждение транзакции
-- смотрим содержимое таблицы loans еще раз (данные должны появиться)


-- пример транзакции с выбросом исключений
-- (выполняем запросы по очереди)
BEGIN;

INSERT INTO loans (user_id, book_id, quantity) values (1, 7, 6);

INSERT INTO loans (user_id, book_id, quantity) values (2, 7, 6); -- выбросит ошибку в случае нехватки книг
-- на этом этапе даже COMMIT не поможет, т.к. транзакция будет автоматически отменена

ROLLBACK; -- откат транзакции вручную