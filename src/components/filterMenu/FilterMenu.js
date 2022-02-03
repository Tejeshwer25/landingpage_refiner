import { useState } from "react";
import Select from "react-select";
import Switch from "react-switch";
import Slider from "react-input-slider";

import styles from "./FilterMenu.module.css";

import filterIcon from "../../assets/filterIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import jobType from "../../assets/JobCategory.json";
import jobLocation from "../../assets/job_location.json";

const FilterMenu = () => {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [internships, setInternships] = useState(false);
  const [expectedSalary, setExpectedSalary] = useState(4);

  return (
    <>
      <div className={styles.filterMenu}>
        <div
          className={styles.filterMenu__header}
          onClick={() => setFilterMenuOpen(true)}
        >
          <img src={filterIcon} alt="" />
          <h4>Filters</h4>
        </div>

        <div
          className={styles.filterMenu__toggleMenu}
          style={{ display: `${filterMenuOpen ? "" : "none"}` }}
        >
          <div className={styles.filterMenu__toggleMenu_header}>
            <h4>Filters</h4>
            <img
              src={closeIcon}
              alt=""
              onClick={() => setFilterMenuOpen(false)}
            />
          </div>

          <div className={styles.filterMenu__toggleMenu_form}>
            <div>
              <label>Category</label>
              <Select
                closeMenuOnSelect={true}
                defaultValue=""
                isMulti
                options={jobType}
              />
            </div>

            <div>
              <label>Location</label>
              <Select
                closeMenuOnSelect={true}
                defaultValue=""
                isMulti
                options={jobLocation}
              />
            </div>

            <div className={styles.switch}>
              <p>Work from Home</p>
              <Switch onChange={() => setChecked(!checked)} checked={checked} />
            </div>

            <div className={styles.switch}>
              <p>Only Internships</p>
              <Switch
                onChange={() => setInternships(!internships)}
                checked={internships}
              />
            </div>

            <div className={styles.slider}>
              <div>
                <p>Desired Minimum Monthly Pay</p>
                <p>{expectedSalary}L</p>
              </div>
              <Slider
                xis="x"
                xstep={0.5}
                xmin={1}
                xmax={10}
                x={expectedSalary}
                onChange={({ x }) => setExpectedSalary(x)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.largeScreenMenu}>
        <div className={styles.largeScreenMenu__header}>
          <img src={filterIcon} alt="" />
          <h4>Filters</h4>
        </div>

        <div className={styles.largeScreenMenu__toggleMenu_form}>
          <div>
            <p>Category</p>
            <Select
              closeMenuOnSelect={true}
              defaultValue=""
              isMulti
              options={jobType}
            />
          </div>

          <div>
            <p>Location</p>
            <Select
              closeMenuOnSelect={true}
              defaultValue=""
              isMulti
              options={jobLocation}
            />
          </div>

          <div className={styles.switch}>
            <p>Work from Home</p>
            <Switch onChange={() => setChecked(!checked)} checked={checked} />
          </div>

          <div className={styles.switch}>
            <p>Only Internships</p>
            <Switch
              onChange={() => setInternships(!internships)}
              checked={internships}
            />
          </div>

          <div className={styles.slider}>
            <div>
              <p>Desired Minimum Monthly Pay</p>
              <p>{expectedSalary}L</p>
            </div>

            <Slider
              xis="x"
              xstep={0.5}
              xmin={1}
              xmax={10}
              x={expectedSalary}
              onChange={({ x }) => setExpectedSalary(x)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
