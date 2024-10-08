import { css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export const styles = css`
  :host {
    --uvc-primary-color: var(--primary-color);
    --uvc-background-color: var(--card-background-color, #fff);
    --uvc-bar-background: var(--uvc-bar-background-color, #595959);
    --uvc-bar-border-color: var(--uvc-bar-border-color, #595959);
    --uvc-bar-fill: var(--uvc-primary-color);
    --uvc-limit-indicator: white;
    --uvc-icon-active: var(--uvc-primary-color);
    --uvc-icon-inactive: var(--secondary-text-color);
    --uvc-info-text-color: var(--secondary-text-color);
    --ha-card-border-radius: var(--ha-config-card-border-radius, 8px);
    --uvc-icon-grid-size: var(--mdc-icon-size, 24px);
  }
  
  .vehicle-card-content {
    padding: 16px;
  }
  
  .vehicle-image-container {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    border-radius: 12px;
  }
  
  .vehicle-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
  }
  
  .vehicle-name {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: var(--primary-text-color);
    text-align: center;
  }
  
.info-line {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
  text-align: center;
  color: var(--uvc-info-text-color);
}
.info-line ha-icon {
  width: 24px !important;
  height: 24px !important;
  min-width: 24px !important;
  min-height: 24px !important;
  --mdc-icon-size: 24px !important;
}
  
  .location, .mileage {
  display: flex;
  align-items: center;
  font-size: 0.9em;
}
  
  .location ha-icon, .mileage ha-icon {
  margin-right: 4px;
}
  
  .level-info {
    flex: 1;
  }
  
  .level-info.hybrid {
    display: flex;
    flex-direction: column;
  }
  
  .hybrid-separator {
    height: 16px;
  }
  
  .item_bar {
    position: relative;
    height: 1.5rem;
    width: 100%;
    background-color: var(--uvc-bar-background);
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid var(--uvc-bar-border-color);
    margin-bottom: 4px;
  }
  
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem;
    margin: 0;
    background-color: var(--uvc-bar-fill);
    border-radius: 4px;
  }
  
  .level-text {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--primary-text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .range {
    text-align: right;
  }
  
  .form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .input-group label {
    margin-bottom: 4px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  
  .entity-description {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }
  
  input[type="text"], .entity-picker-input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 16px;
    background-color: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    box-sizing: border-box;
  }
  
  input[type="text"]:focus, .entity-picker-input:focus {
    outline: none;
    border-color: var(--uvc-primary-color);
    box-shadow: 0 0 0 1px var(--uvc-primary-color);
  }
  
  .radio-group, .checkbox-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .radio-group label, .checkbox-group label {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  
  input[type="radio"], input[type="checkbox"] {
    margin-right: 8px;
  }
  
  input[type="file"] {
    margin-top: 8px;
  }
  
  .entity-picker-container {
    position: relative;
    width: 100%;
  }
  
  .entity-picker-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-top: none;
    z-index: 1000;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: -1px;
    width: calc(100% + 2px);
    left: -1px;
    padding: 4px 0;
  }
  
  .entity-picker-result {
    padding: 8px 12px;
    cursor: pointer;
    color: var(--primary-text-color);
  }
  
  .entity-picker-result:hover {
    background-color: var(--secondary-background-color);
  }
  
  .entity-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .entity-picker-wrapper {
    flex-grow: 1;
    margin-right: 16px;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    flex-shrink: 0;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: var(--uvc-primary-color);
  }
  
  input:checked + .slider:before {
    transform: translateX(16px);
  }
  
  .icon-grid-container {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  
  .selected-entities {
    position: relative;
  }

  .selected-entity {
    transition: all 0.3s ease;
    margin-bottom: 8px;
  }

  .selected-entity.dragging {
    opacity: 0.5;
    background-color: var(--primary-color);
  }
  .drag-placeholder {
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px dashed #ccc;
    margin-bottom: 8px;
    transition: all 0.2s ease;
}

  .handle {
    cursor: move;
    touch-action: none;
  }

  .entity-header {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .toggle-details {
    cursor: pointer;
    margin-right: 16px;
  }

  .entity-name {
    flex-grow: 1;
    font-weight: bold;
  }

  .remove-entity {
    cursor: pointer;
  }

  .entity-details {
    background-color: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-top: none;
    padding: 8px;
  }

  .icon-row, .interaction-row {
    padding: 8px;
    display: block;
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .icon-wrapper label {
    margin-right: 8px;
    min-width: 60px;
  }
  
  ha-icon-picker {
    flex-grow: 1;
  }
  
  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 16px 0;
  }
  
 .icon-item ha-icon {
  width: var(--uvc-icon-grid-size);
  height: var(--uvc-icon-grid-size);
  color: var(--uvc-primary-color);
}
  
  .icon-item ha-icon {
    width: 24px;
    height: 24px;
     width: var(--uvc-icon-grid-size);
  height: var(--uvc-icon-grid-size);
  color: var(--uvc-primary-color);
  }
  
  .interaction-select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }
  
  .interaction-option {
    margin-top: 8px;
  }
  
  .interaction-option label {
    display: block;
    margin-bottom: 4px;
  }
  
  .interaction-option input,
  .interaction-option select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
  }
  
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  
  .checkbox-wrapper input {
    margin-right: 8px;
  }
  
  
  .color-input-wrapper {
    display: flex;
    align-items: center;
    border: solid;
    border-radius: 4px;
    position: relative;
    width: 100%;
    gap: 12px;
    margin-bottom:12px;
padding-left: 4px;
    padding-right: 4px;
}
  .color-pickers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 600px) {
  .color-pickers-grid {
    grid-template-columns: 1fr;
  }
}
  
  .color-preview {
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    cursor: pointer;
  }
  
  .color-hex {
    font-family: monospace;
    font-size: 14px;
  }
  
  .reset-icon {
    --mdc-icon-size: 20px;
    cursor: pointer;
  }
  
input[type="color"] {
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: unset;
}
  
  
  .charge-limit-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--uvc-limit-indicator);
    z-index: 1;
  }
   .entity-information {
          border: 1px solid var(--divider-color);
          padding: 16px;
          margin-bottom: 16px;
        }
        .entity-information-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .icon-size-slider {
          width: 100%;
          margin-top: 16px;
        }

  button {
    padding: 8px 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  /* Animation for charging */
  @keyframes move-stripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 0;
    }
  }
  
  .progress.charging {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 50px 50px;
    animation: move-stripes 2s linear infinite;
  }
  
  /* Improve scrollbar appearance */
  .entity-picker-results::-webkit-scrollbar {
    width: 8px;
  }
  .entity-picker-results::-webkit-scrollbar-track {
    background: var(--card-background-color, #f1f1f1);
  }
  .entity-picker-results::-webkit-scrollbar-thumb {
    background: var(--secondary-text-color);
    border-radius: 4px;
  }
  .entity-picker-results::-webkit-scrollbar-thumb:hover {
    background: var(--primary-text-color);
  }

  @media (max-width: 600px) {
    
    .icon-row, .interaction-row {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .interaction-option {
      flex-direction: column;
    }
    
    .interaction-option label {
      margin-bottom: 4px;
    }
    
    .interaction-option input,
    .interaction-option select {
      width: 100%;
    }
  }
`;