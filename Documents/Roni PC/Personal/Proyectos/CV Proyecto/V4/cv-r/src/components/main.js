import Profile from './Profile'
import Info from './Info'
import Summary from './Summary';
import Experience from './Experience';



function main() {
  return (
    <div>
        <div class="wrapper">
            <div class="sidebar-wrapper">
                <Profile/>
                <Info/>
            </div>

            <div class="main-wrapper">
                <Summary/>
                <Experience/>
            
            </div>
        <footer class="footer">
            <div class="text-center">

            </div>
        </footer>
        </div>
    </div>
  );
}

export default main;
