import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/app/components/home_page/header.jsx';
import Nav from '@/app/components/home_page/nav.jsx';
import  {Content , Under_content} from '@/app/components/home_page/conent.jsx';
import {Footer , Footer_2} from '@/app/components/home_page/footer.jsx';
import FormSuggestions from '@/app/components/formSuggestions.jsx';
function suggestions() {
    return (
        <>
  <div className='container-fluid text-center'>
          <Header />
          <Nav />
      <FormSuggestions/>
      <Footer />
      <Footer_2 />
      </div>        

        </>
    );
}
export default suggestions;