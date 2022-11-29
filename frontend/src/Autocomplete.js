import './Autocomplete.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Pop() {
  // note: the id field is mandatory
  const items = [
    {
      name: 'Teddy Riner'
    },
    {
      name: 'Thibaut Weibel'
    },
    {
      
      name: 'Fares'
    },
    {
      
      name: 'Romain'
    },
    {
      
      name: 'Ryan'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left'}}> {item.name}</span>
      </>
    )
  }

  return (
    <div className="Infosportif">
      <header className="App-header">
        <div style={{ width: 200 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus={true}
            formatResult={formatResult}
            maxResults={20}
            placeholder={"Rechercher un sportif ..."}
            showItemsOn={true}
            styling={ 
                {
                height: "30px",
                border: "1px solid #dfe1e5",
                borderRadius: "24px",
                backgroundColor: "white",
                boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                hoverBackgroundColor: "#eee",
                color: "rgb(173, 157, 157)",
                fontSize: "12px",
                fontFamily: "Arial",
                iconColor: "grey",
                lineColor: "rgb(232, 234, 237)",
                placeholderColor: "grey",
                clearIconMargin: '3px 14px 0 0',
                searchIconMargin: '0 0 0 16px'
            }
            }
          />
        </div>
      </header>
    </div>
  )
}

export default Pop
