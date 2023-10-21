import { signIn, useSession } from 'next-auth/react';
import IconButton from './IconButton';

import { v4 as uuidv4 } from 'uuid';  // Import the UUID generator
import { SignaturePayload } from '../utils/types';  // Import the type
import { useSignMessage } from 'wagmi';

export default function LeftControls() {
   // Define the useSignMessage hook
   const { signMessageAsync } = useSignMessage();

   const startBindingProcess = async () => {
     if (!session) {
       // If the user is not signed in, initiate the sign-in process.
       await signIn('twitter');
     }
     // After signing in, the session object will contain user details.
     const twitterHandle = session?.user?.name;
 
     const signaturePayload: SignaturePayload = {
       action: "create",
       created_at: Math.floor(Date.now() / 1000), // current UNIX timestamp
       platform: "twitter",
       identity: twitterHandle,
       prev: null, // assuming this is the first operation
       uuid: uuidv4(),  // Generate a UUID for the operation
     };
 
     // Request a signature from the user's wallet using wagmi's useSignMessage hook
     const signature = await signMessageAsync({
       message: JSON.stringify(signaturePayload)
     });
 
     // At this point, you have the signed payload as `signature`.
     // You can continue with the process of posting this on Twitter 
     // and then interacting with ProofService.
   };
 
   return (
     <div className="flex items-center space-x-4">
       <button onClick={startBindingProcess} className="ml-4 p-2 bg-blue-500 text-white rounded">Bind Twitter Account</button>
       <IconButton icon="🔔" />
       <IconButton icon="⚙️" />
     </div>
   );
 }