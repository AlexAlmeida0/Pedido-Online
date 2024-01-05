import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Bebidas() {
  const { bebidas } = useSnack()
  return (
    <>
      <Head title='Bebidas'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
