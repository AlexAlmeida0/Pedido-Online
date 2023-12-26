import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Burguers() {
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'Nossa artesanal Burguer tamanho família, recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bacon, nossa buguer possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 20.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    },
  ]


  return(
    <>
      <Head title='Hambúrguers'/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
