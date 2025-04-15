import { Link } from "react-router-dom"
import Cover from "../../Shared/Cover/Cover"
import MenuItem from "../../Shared/MenuItem/MenuItem"


const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div>
      {title && <Cover bgImg={coverImg } title={title}/>}
      <div className="grid md:grid-cols-2 gap-10 p-6 my-4">
        {items.map((i) => (
          <MenuItem key={i._id} item={i} />
        ))}
      </div>
      <Link className="flex justify-center items-center" 
      to={`/order/${title}`}>
      <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
      </Link>
    </div>
  )
}

export default MenuCategory