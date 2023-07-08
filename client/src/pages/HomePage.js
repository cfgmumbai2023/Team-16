import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import Tab from '../components/Tab';
import ChildForm from '../components/ChildForm';

export const HomePage = () => {

    return (
        <div className='flex'>
            <div className="h-screen top-0 sticky px-4 py-2 w-1/4 text-white bg-primary font-poppins">
                <div className="flex items-center flex-wrap text-4xl">
                    <span>
                        URMI
                    </span>
                </div>
                <div className="my-20 text-xl">
                    <div onClick={() => console.log('ok')}>
                        <Tab
                            icon = {<HomeIcon />}
                            title = "Dashboard"
                        />
                    </div>
                    <div onClick={() => console.log('ok')}>
                        <Tab 
                            icon = {<AddIcon />}
                            title = "Data Entry"
                        />
                    </div>
                </div>
            </div>
            <div className='w-3/4 bg-white'>
                <ChildForm />
            </div> 
        </div>
    )
}