<?php

namespace Source;

class ServiceProduct implements IServiceProduct
{

    private $db;

    public function __construct(IConn $db)
    {
        $this->db = $db->connect();

    }

    public function delete()
    {
        
    }

    public function lister()
    {
        $query = 'SELECT * FROM `products`';

        $stmt = $this->db->prepare($query);

        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);

    }

    public function save()
    {
        
    }

    public function update()
    {
        
    }

}