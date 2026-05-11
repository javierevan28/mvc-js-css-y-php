<?php
header("Content-Type: application/json");

require_once("../config/database.php");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["username"]) || !isset($data["password"])) {
    echo json_encode([
        "success" => false,
        "message" => "Datos incompletos"
    ]);
    exit;
}

$database = new Database();
$conn = $database->connect();

$query = "SELECT * FROM users WHERE username = :username AND password = :password LIMIT 1";
$stmt = $conn->prepare($query);

$stmt->bindParam(":username", $data["username"]);
$stmt->bindParam(":password", $data["password"]);

$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode([
        "success" => true,
        "message" => "Bienvenido " . $user["username"]
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Usuario o contraseña incorrectos"
    ]);
}