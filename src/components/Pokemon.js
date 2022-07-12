import '../App.css';
import React from 'react';
//Can only return one element
const Pokemon = ({name, url, id, types}) => {
    return (
        <div className="Pokemon">
            <div>
                <div>
                    <p className='Id'>#{('000' + id).slice(-3)}</p>
                </div>
                <img alt={name} src={url} />
            </div>
            <div>
                <p>{name}</p>
                <div> {
                    types.map((user, i) => {
                        return (
                            <div className={`Tag ${types[i].type.name}`}>
                                <p key={name + i} className='Types'>{types[i].type.name[0].toUpperCase() + types[i].type.name.slice(1).toLowerCase()}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Pokemon;