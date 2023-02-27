<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json;");


class crud{
 
 static function connect(){
   try{

<<<<<<< HEAD
   $con=new PDO('mysql:localhost=localhost;dbname=react-the-project','root','');

=======
   $con=new PDO('mysql:localhost=localhost;dbname=react_the_project','root','');
   // echo 'hhhhhhhhhhhhhhhhhhh';
>>>>>>> 4d2309f869b41c107b1275d60a123daa4495fd34
   return $con;
   

}catch(PDOException $error){

   echo 'Error' . $error->getMessage();


}

}

}

// crud::connect();
?>