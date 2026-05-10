<?php   
    class Database{
        private $host = "localhost";
        private $db_name = "mvc_login";
        private $username = "root";
        private $password = "";
        public $conn;

        // Método de conexión
        public function connect(){
            $this -> conn = null;

            try{
                
            }catch(PDOException $e){
                echo json_encode(["error" => "Error de conexión"]);
            }
        }
    }