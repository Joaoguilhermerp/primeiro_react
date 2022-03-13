function Header( {titulo,fontSize} ){
    return(
      <div>
        <p style={{fontSize: fontSize+'px'}}>
          Joao G. - {titulo} - FontSize: {fontSize}
        </p>
      </div>
    )
  }

export default Header;