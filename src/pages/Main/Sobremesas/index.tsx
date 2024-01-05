import { useSnack } from "../../../hooks/useSnack"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Sobremesas() {
  const { sobremesas } = useSnack()
  return (
    <>
      <Head title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={sobremesas}></Snacks>
    </>
  )
}
