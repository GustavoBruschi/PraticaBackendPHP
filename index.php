<?php

    $temperatura = $_REQUEST['temperatura'];
    $unidade = $_REQUEST['unidade'];
    $resultado=[];
    if($unidade == "C"){
        $resultado ['temperatura']= $temperatura * 9 / 5 + 32;
        $resultado['unidade']='f';
    }
    else {
        $resultado['temperatura'] = ($temperatura - 32) *5 / 9;
        $resultado['unidade'] = 'c'; 
        
    }
    echo json_encode($resultado);
?>