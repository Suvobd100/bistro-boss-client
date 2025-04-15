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
    </div>
  )
}

export default MenuCategory