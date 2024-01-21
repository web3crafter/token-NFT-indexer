import { formatAddress } from "@/lib/utils"

import NativeTokenCard from "@/components/native-token-card"
import TokenType from "@/components/token-type"

const AddressPage = ({ params }: { params: { address: string } }) => {
  const { address } = params

  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">
          {formatAddress(params.address)}
        </h1>
        <NativeTokenCard address={address as string} />
      </div>
      <TokenType address={address} />
    </main>
  )
}
export default AddressPage
