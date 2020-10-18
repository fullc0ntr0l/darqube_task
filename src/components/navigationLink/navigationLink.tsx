import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import styles from "./navigationLink.module.css";
import { NewsView, selectCurrentView, setCurrentView } from "../../store/news";

interface IProps {
  label: string;
  viewName: NewsView;
}

export const NavigationLink = ({ label, viewName }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const currentView = useSelector(selectCurrentView);
  const className = cn(
    styles.link,
    currentView === viewName && styles.selectedLink
  );

  const handleClick = React.useCallback(
    () => dispatch(setCurrentView(viewName)),
    [dispatch, viewName]
  );

  return (
    <input
      type="button"
      className={className}
      value={label}
      onClick={handleClick}
    />
  );
};
