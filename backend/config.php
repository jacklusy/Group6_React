<?php


class crud{
 
 static function connect(){
   try{

   $con=new PDO('mysql:localhost=localhost;dbname=react_the_project','root','');
   //echo 'hhhhhhhhhhhhhhhhhhh';
   return $con;
 

}catch(PDOException $error){

   echo 'the error ' . $error->getMessage();


}}}
$con=crud::connect();

?>