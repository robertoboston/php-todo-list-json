<?php 
    // 1 recupero il contenuto di todo-list.json
    $string = file_get_contents('todo-list.json');

    // 2 converto la stringa in array associativo
    $todo_list = json_decode($string, true);


    //3 controllo se ho inviato un nuovo task 
    if(isset($_POST['todoItem'])){
        $todo_item = $_POST['todoItem'];
        // aggiungo in coda un nuovo elemento all'array
        array_push($todo_list,$todo_item);

        // scrivo il dato all'interno del file json
        file_put_contents('todo-list.json', json_encode(($todo_list)));
    }


    header('Content-Type: application/json');
    echo json_encode($todo_list);
?>