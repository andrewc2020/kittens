import useSWR from 'swr';
import Link from 'next/link'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function CatList(props) {
    
     
   
     const { data, error } = useSWR(
       `/api/cats`,
       fetcher
     );
   
     
   return (
   
        <div>
       <h1>Cats</h1>
   
       <ul>
         {data && data.cats && data.cats.map(cat => (
           <li key={cat._id}>
             <Link href="/cats/[id]" as={`/cats/${cat.id}`}>
               {cat.name}
             </Link>
             
           </li>
         ))}
       </ul>
       </div>
   )};