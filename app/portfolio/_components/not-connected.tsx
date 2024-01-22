import SearchTokens from "@/components/search-tokens"
import CustomConnectButton from "@/components/buttons/custom-connect-button"

const NotConnected = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-semibold text-lg">Connect to see Portfolio</p>
        <CustomConnectButton />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <p className="font-semibold text-lg">Or Search for an address</p>
        <SearchTokens />
      </div>
    </div>
  )
}
export default NotConnected
