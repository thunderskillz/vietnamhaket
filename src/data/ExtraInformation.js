import {
  faThumbsUp,
  faSnowflake,
  faBreadSlice,
  faStar,
  faEgg
} from '@fortawesome/free-solid-svg-icons'

export const ExtraInformation = {
  sv: {
    recommended: { icon: faThumbsUp, description: 'Rekommenderad' },
    gluten: { icon: faBreadSlice, description: 'Innehåller gluten' },
    nuts: { icon: faEgg, description: 'Innehåller nötter' },
    cold: { icon: faSnowflake, description: 'Serveras kall' },
    new: { icon: faStar, description: 'Nyhet' }
  },
  en: {
    recommended: { icon: faThumbsUp, description: 'Recommended' },
    gluten: { icon: faBreadSlice, description: 'Contains gluten' },
    nuts: { icon: faEgg, description: 'Contains nuts' },
    cold: { icon: faSnowflake, description: 'Served cold' },
    new: { icon: faStar, description: 'New' }
  }
}
