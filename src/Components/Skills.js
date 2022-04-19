import '../App.css';
import SoftSkills from '../Components/SoftSkills';

function Skills(){
    return(
        <div className='content'>
            <h1>SKills</h1>
            <div className='contents-area'>
                <h4>Languages</h4>
                <div className='lang'>
                    <p>German <br/> <span>Native</span></p>
                    <p>English <br/> <span>Full</span></p>
                    <p>Spanish <br/> <span>Limited</span></p>
                </div>
                <SoftSkills/>
            </div>
        </div>
    )
}

export default Skills;