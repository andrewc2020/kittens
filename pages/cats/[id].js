
import Layout from '../../components/MyLayout'
import getCat from '../api/_cat'
import KittenList from '../../components/kittenList'




const Cat = props => (  
        <Layout>
<div><h1>{props.cat && props.cat.name}</h1>
<KittenList id={props.cat.id}>
        {props.children}
</KittenList>
</div>
        </Layout>
    );
Cat.getInitialProps = async function(context){
        const id = context.query.id
       

        const data = getCat(id)
    
        
        
        
        let cat = data[0];
       

        
       
        return {cat};
      }
    


export default Cat