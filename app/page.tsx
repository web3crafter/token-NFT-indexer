import ChainInfo from "@/app/_components/chain-info"
import SearchTokens from "@/components/search-tokens"

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-8 my-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Token Indexer</h1>
        <p>
          Plug in an address and this website will return all of its ERC-20
          token balances!
        </p>
        <SearchTokens />
      </div>
      <ChainInfo />
    </main>
  )
}
