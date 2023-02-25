import Link from 'next/link'


const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
     
      <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/cats" style={linkStyle}>
        Cats
      </Link>
      <Link href="/about" style={linkStyle}>
        About
      </Link>
     
    </div>
  )
}
