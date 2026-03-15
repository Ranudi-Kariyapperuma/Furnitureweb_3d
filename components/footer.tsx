export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
  <img
    src="/logo.png"
    alt="DesignSpace logo"
    className="w-10 h-10 rounded-full object-cover border-2 border-lime-500 p-1 shadow-md hover:scale-110 transition-transform duration-300 mr-2"
  />
  <h3 className="text-lg font-semibold text-lime-500 drop-shadow-[0_0_2px_#22c55e] drop-shadow-[0_0_5px_#22c55e]">
    DesignSpace
  </h3>
</div>
           
            <p className="text-gray-300">Quality furniture for every home and office.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4  text-white drop-shadow-[0_0_2px_#22c55e] drop-shadow-[0_0_1px_#22c55e]">Contact</h3>
            <p className="text-gray-300">Pitipana</p>
            <p className="text-gray-300">Thalagala Rd, Homagama</p>
            <p className="text-gray-300">contactdesignspace.com</p>
            
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4  text-white drop-shadow-[0_0_2px_#22c55e] drop-shadow-[0_0_1px_#22c55e]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2023 FurniCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 