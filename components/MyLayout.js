import Header from './Header'
import Head from 'next/head'




const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
  
    <div style={layoutStyle}>
      <Header />
    
      {props.children}
    </div>
   
  )
}
