import useSWR from 'swr';
import Link from 'next/link';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}
export default function KittenList(props){
    const { data, error } = useSWR(
        `/api/kittens?id=${props.id}`,
        fetcher
      );
      
    return(
        <div>
        <h2>Kittens</h2>
        <ul>
      {data && data && data.map(kitten => (
        <li key={kitten._id}>
          <Link href="/p/[id]" as={`/p/${kitten._id}`}>
            {kitten.name}
          </Link>
          
        </li>
      ))}
    </ul>

        </div>
    )
}