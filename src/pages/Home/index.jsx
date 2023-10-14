import { Layout } from "../../Components/Layout"
import {Card} from "../../Components/Card"
import { useState, useEffect } from "react";

const apiUrl = 'https://fakestoreapi.com';

function Home() {

    const [items, setItems] = useState(null);

    useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await fetch(`${apiUrl}/products`);
          const data = await response.json()
          setItems(data)
        } catch(error){
          console.log(error)
        }
      }
      fetchData()
    }, [])

    return (
      <Layout>
        Home
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items?.map( item =>{
            return <Card key={item.id} data={item} />
          })}
        </section>
      </Layout>
    )
  }
  
  export {Home}