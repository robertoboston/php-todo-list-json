<?php 
    // 1 recupero il contenuto di todo-list.json
    $string = file_get_contents('todo-list.json');

    // 2 converto la stringa in array associativo
    $todo_list = json_decode($string, true);


    header('Content-Type: application/json');
    echo json_encode($todo_list);
?>