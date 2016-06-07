<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
//require '../../hello-world.php';

$app = new \Slim\App;
$app->get('/products', function (Request $request, Response $response) {
    // $name = $request->getAttribute('name');
    // $response->getBody()->write("Retrieving data for: $name");
    $output = array();
    $products = array();
    $tags = array();
    $catgories = array();
    
    
    $user = 'dtromblee';
    $pass = '';
    $db = new PDO('mysql:host=localhost;dbname=amys_store', $user, $pass);
    $stmt = $db->prepare('SELECT p.product_id, p.name, p.description, p.price, pt.name AS category FROM product AS p JOIN product_type AS pt ON pt.product_type_id = p.product_type_id');
    $stmt->execute();
    
    while($product = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $product['tags'] = array();
        $stmt1 = $db->prepare('SELECT t.name FROM tag_set as ts JOIN tag as t ON ts.tag_id = t.tag_id WHERE product_id = :product_id');
        $stmt1->bindParam(":product_id", $product['product_id']);
        $stmt1->execute();
        
        while($tag = $stmt1->fetch(PDO::FETCH_ASSOC)) {
            $product['tags'][] = $tag['name'];
            $tags[$tag['name']] = isset($tags[$tag['name']]) ? $tags[$tag['name']]++ : 1;
        }
        
        $product['img'] = array();
        $stmt1 = $db->prepare('SELECT i.file_name FROM img_set AS iset JOIN img as i ON i.img_id = iset.img_id WHERE product_id = :product_id');
        $stmt1->bindParam(":product_id", $product['product_id']);
        $stmt1->execute();
        
        while($img = $stmt1->fetch(PDO::FETCH_ASSOC)) {
            array_push($product['img'], $img['file_name']);
        }
        
        $catgories[$product['category']] = isset($catgories[$product['category']]) ? $catgories[$product['category']]++ : 1;
        $products[] = $product;
    }
    
    $output['categories'] = $catgories;
    $output['tags'] = $tags;
    $output['products'] = $products;
   
    $output = json_encode($output);
    
    $response->getBody()->write($output);

    return $response;
});

$app->get('/product/{productId}', function (Request $request, Response $response) {
    $output = array();
    $products = array();
    $tags = array();
    $catgories = array();
    
    $productId = $request->getAttribute('productId');
    
    $user = 'dtromblee';
    $pass = '';
    $db = new PDO('mysql:host=localhost;dbname=amys_store', $user, $pass);
    $stmt = $db->prepare('SELECT p.product_id, p.name, p.description, p.price, pt.name AS category FROM product AS p JOIN product_type AS pt ON pt.product_type_id = p.product_type_id WHERE p.product_id = :product_id');
    $stmt->bindParam(':product_id', $productId);
    $stmt->execute();
    
    while($product = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $product['tags'] = array();
        $stmt1 = $db->prepare('SELECT t.name FROM tag_set as ts JOIN tag as t ON ts.tag_id = t.tag_id WHERE product_id = :product_id');
        $stmt1->bindParam(":product_id", $product['product_id']);
        $stmt1->execute();
        
        while($tag = $stmt1->fetch(PDO::FETCH_ASSOC)) {
            $product['tags'][] = $tag['name'];
            $tags[$tag['name']] = isset($tags[$tag['name']]) ? $tags[$tag['name']]++ : 1;
        }
        
        $product['img'] = array();
        $stmt1 = $db->prepare('SELECT i.file_name FROM img_set AS iset JOIN img as i ON i.img_id = iset.img_id WHERE product_id = :product_id');
        $stmt1->bindParam(":product_id", $product['product_id']);
        $stmt1->execute();
        
        while($img = $stmt1->fetch(PDO::FETCH_ASSOC)) {
            array_push($product['img'], $img['file_name']);
        }
        
        $catgories[$product['category']] = isset($catgories[$product['category']]) ? $catgories[$product['category']]++ : 1;
        $products[] = $product;
    }
    
    $output['categories'] = $catgories;
    $output['tags'] = $tags;
    $output['products'] = $products;
   
    $output = json_encode($output);
    
    $response->getBody()->write($output);

    return $response;
    
});
$app->delete('/rest/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Deleting data for: $name");

    return $response;
});

$app->run();