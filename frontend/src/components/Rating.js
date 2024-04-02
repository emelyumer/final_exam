import React from "react";
import {Card} from 'react-bootstrap'

function Rating({value, text, color}) {
    return (
        <div className='Rating'>
            <span>
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        :value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'

                }>
                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        :value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'

                }>
                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        :value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'

                }>
                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        :value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'

                }>
                </i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        :value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'

                }>
                </i>
            </span>
        </div>
    )
}

export default Rating