import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/img/globe2.png";
import { Endorsement } from "../../contracts/endorsement";
import { Wallet } from "../../components/Wallet";
import { useNavigate } from 'react-router-dom';
function IssueEndors() {
  const navigate = useNavigate();

  const wallet = new Wallet({ createAccessKeyFor: "sordgom_1_endorsement.testnet" });
  const endorsement = new Endorsement({contractId: "sordgom_1_endorsement.testnet", walletToUse: wallet });

  const [receiverId, setReceiverId] = React.useState();
  const [text, setText] = React.useState();
  
 
  function handleSubmit() {
    endorse();

  }

  //{"token_id": "token-1", "metadata": {"title": "TEST-ENDORSEMENT", "description": "This is a drill", "text": "This is the first endorsement test"}, "receiver_id": "'$NFT_CONTRACT_ID'"}
  async function endorse(){
    try{
      if(!receiverId || !text) {
        console.log('Somethings missing');
        return ; 
      }
      await endorsement.nft_mint(
        "token-4", // argument name and value - pass empty object if no args required
        {
            title: "TEST-ENDORSEMENT",
            description: "This is a drill",
            text : text
        },
        receiverId
      ).then((res) => {
        console.log(res);
        navigate('/mintSuccess');
      });
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    async function start() {
      const isSignedIn = await wallet.startUp()
      if(!isSignedIn){
        await wallet.signIn();
      }
    }
    start();
  },[]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full mt-20">
          <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
            <p className="text-[4vh] font-bold text-center text-black uppercase font-robotoMono">
              Issue an Endorsement NFT
            </p>
            <div className="mt-10 px-20">
              <form >
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-bold text-[#000000]"
                  >
                    Who are you endorsing? (his/her wallet address)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setReceiverId(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2 text-left">
                  <label
                    htmlFor="endorsing"
                    className="block text-sm font-semibold text-black"
                  >
                    Your endorsing
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    className="h-20 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-20">
                    <button
                      type="button"
                      className="bg-white px-4 py-2 rounded-full font-bold"
                      onClick={handleSubmit}
                    >
                      Mint and Transfer
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueEndors;
