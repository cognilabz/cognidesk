import type { AppearanceConfiguration } from "@cognidesk/ui";
import {
  resolveWidgetElementClassName,
  resolveWidgetInlineStyle,
  widgetElementKeys,
} from "@cognidesk/ui";
import type { WidgetRendererMap } from "./types.js";

export const defaultWidgetRenderers: WidgetRendererMap = {
  confirmation: ({ input, output, submit, kind, appearance, disabled, submitted }) => {
    const data = asRecord(input);
    const submittedOutput = asRecord(output);
    const confirmed = submittedOutput.confirmed === true;
    return (
      <div className={widgetClassName(kind, widgetElementKeys.panel, appearance)} style={widgetStyle(kind, widgetElementKeys.panel, appearance)}>
        {typeof data.title === "string" ? (
          <div className={widgetClassName(kind, widgetElementKeys.title, appearance)} style={widgetStyle(kind, widgetElementKeys.title, appearance)}>
            {data.title}
          </div>
        ) : null}
        {typeof data.message === "string" ? (
          <div className={widgetClassName(kind, widgetElementKeys.description, appearance)} style={widgetStyle(kind, widgetElementKeys.description, appearance)}>
            {data.message}
          </div>
        ) : null}
        {submitted ? (
          <div className={widgetClassName(kind, widgetElementKeys.description, appearance)} style={widgetStyle(kind, widgetElementKeys.description, appearance)}>
            {confirmed ? "Confirmed" : "Not confirmed"}
          </div>
        ) : (
          <div className={widgetClassName(kind, widgetElementKeys.actions, appearance)} style={widgetStyle(kind, widgetElementKeys.actions, appearance)}>
            <button className={widgetClassName(kind, widgetElementKeys.primaryButton, appearance)} style={widgetStyle(kind, widgetElementKeys.primaryButton, appearance)} type="button" disabled={disabled} onClick={() => submit({ confirmed: true })}>
              {typeof data.confirmLabel === "string" ? data.confirmLabel : "Confirm"}
            </button>
            <button className={widgetClassName(kind, widgetElementKeys.button, appearance)} style={widgetStyle(kind, widgetElementKeys.button, appearance)} type="button" disabled={disabled} onClick={() => submit({ confirmed: false })}>
              {typeof data.cancelLabel === "string" ? data.cancelLabel : "Cancel"}
            </button>
          </div>
        )}
      </div>
    );
  },
  "text-input": ({ promptId, input, output, submit, kind, appearance, disabled, submitted }) => {
    const data = asRecord(input);
    const submittedOutput = asRecord(output);
    const inputId = `${promptId}-value`;
    return (
      <form className={widgetClassName(kind, widgetElementKeys.panel, appearance)} style={widgetStyle(kind, widgetElementKeys.panel, appearance)} onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        submit({ value: String(form.get("value") ?? "") });
      }}>
        <WidgetLabel input={data} kind={kind} appearance={appearance} htmlFor={inputId} />
        <input id={inputId} className={widgetClassName(kind, widgetElementKeys.input, appearance)} style={widgetStyle(kind, widgetElementKeys.input, appearance)} name="value" placeholder={typeof data.placeholder === "string" ? data.placeholder : undefined} defaultValue={typeof submittedOutput.value === "string" ? submittedOutput.value : undefined} required disabled={disabled} />
        {submitted ? null : <button className={widgetClassName(kind, widgetElementKeys.primaryButton, appearance)} style={widgetStyle(kind, widgetElementKeys.primaryButton, appearance)} type="submit" disabled={disabled}>Submit</button>}
      </form>
    );
  },
  choice: ({ input, output, submit, kind, appearance, disabled, submitted }) => {
    const data = asRecord(input);
    const submittedOutput = asRecord(output);
    const selectedId = typeof submittedOutput.selectedId === "string" ? submittedOutput.selectedId : "";
    const options = Array.isArray(data.options) ? data.options.map(asRecord) : [];
    return (
      <div className={widgetClassName(kind, widgetElementKeys.panel, appearance)} style={widgetStyle(kind, widgetElementKeys.panel, appearance)}>
        <WidgetLabel input={data} kind={kind} appearance={appearance} />
        <div className={widgetClassName(kind, widgetElementKeys.choiceList, appearance)} style={widgetStyle(kind, widgetElementKeys.choiceList, appearance)}>
          {options.map((option) => {
            const id = typeof option.id === "string" ? option.id : "";
            return (
              <button key={id} className={widgetClassName(kind, widgetElementKeys.choice, appearance)} style={widgetStyle(kind, widgetElementKeys.choice, appearance)} type="button" disabled={disabled} data-selected={submitted && id === selectedId ? "true" : undefined} onClick={() => submit({ selectedId: id })}>
                <span className={widgetClassName(kind, widgetElementKeys.choiceLabel, appearance)} style={widgetStyle(kind, widgetElementKeys.choiceLabel, appearance)}>{typeof option.label === "string" ? option.label : id}</span>
                {typeof option.description === "string" ? (
                  <span className={widgetClassName(kind, widgetElementKeys.choiceDescription, appearance)} style={widgetStyle(kind, widgetElementKeys.choiceDescription, appearance)}>
                    {option.description}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
  "date-picker": ({ promptId, input, output, submit, kind, appearance, disabled, submitted }) => {
    const data = asRecord(input);
    const submittedOutput = asRecord(output);
    const inputId = `${promptId}-value`;
    return (
      <form className={widgetClassName(kind, widgetElementKeys.panel, appearance)} style={widgetStyle(kind, widgetElementKeys.panel, appearance)} onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        submit({ value: String(form.get("value") ?? "") });
      }}>
        <WidgetLabel input={data} kind={kind} appearance={appearance} htmlFor={inputId} />
        <input
          id={inputId}
          className={widgetClassName(kind, widgetElementKeys.input, appearance)}
          style={widgetStyle(kind, widgetElementKeys.input, appearance)}
          name="value"
          type="date"
          min={typeof data.min === "string" ? data.min : undefined}
          max={typeof data.max === "string" ? data.max : undefined}
          defaultValue={typeof submittedOutput.value === "string" ? submittedOutput.value : undefined}
          required
          disabled={disabled}
        />
        {submitted ? null : <button className={widgetClassName(kind, widgetElementKeys.primaryButton, appearance)} style={widgetStyle(kind, widgetElementKeys.primaryButton, appearance)} type="submit" disabled={disabled}>Submit</button>}
      </form>
    );
  },
  form: ({ input, output, submit, kind, appearance, disabled, submitted }) => {
    const data = asRecord(input);
    const submittedOutput = asRecord(output);
    const values = asRecord(submittedOutput.values);
    const fields = Array.isArray(data.fields) ? data.fields.map(asRecord) : [];
    return (
      <form className={widgetClassName(kind, widgetElementKeys.panel, appearance)} style={widgetStyle(kind, widgetElementKeys.panel, appearance)} onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const values: Record<string, unknown> = {};
        for (const field of fields) {
          const path = typeof field.path === "string" ? field.path : "";
          if (!path) continue;
          values[path] = form.get(path);
        }
        submit({ values });
      }}>
        {typeof data.title === "string" ? (
          <div className={widgetClassName(kind, widgetElementKeys.title, appearance)} style={widgetStyle(kind, widgetElementKeys.title, appearance)}>
            {data.title}
          </div>
        ) : null}
        <div className={widgetClassName(kind, widgetElementKeys.fields, appearance)} style={widgetStyle(kind, widgetElementKeys.fields, appearance)}>
          {fields.map((field) => renderFormField(field, kind, appearance, Boolean(disabled), values))}
        </div>
        {submitted ? null : <button className={widgetClassName(kind, widgetElementKeys.primaryButton, appearance)} style={widgetStyle(kind, widgetElementKeys.primaryButton, appearance)} type="submit" disabled={disabled}>Submit</button>}
      </form>
    );
  },
};

function WidgetLabel(props: { input: Record<string, unknown>; kind: string; appearance?: AppearanceConfiguration | undefined; htmlFor?: string }) {
  return (
    <div>
      {typeof props.input.label === "string" ? (
        <label htmlFor={props.htmlFor} className={widgetClassName(props.kind, widgetElementKeys.title, props.appearance)} style={widgetStyle(props.kind, widgetElementKeys.title, props.appearance)}>
          {props.input.label}
        </label>
      ) : null}
      {typeof props.input.description === "string" ? (
        <div className={widgetClassName(props.kind, widgetElementKeys.description, props.appearance)} style={widgetStyle(props.kind, widgetElementKeys.description, props.appearance)}>
          {props.input.description}
        </div>
      ) : null}
    </div>
  );
}

function renderFormField(
  field: Record<string, unknown>,
  kind: string,
  appearance: AppearanceConfiguration | undefined,
  disabled: boolean,
  values: Record<string, unknown>,
) {
  const path = typeof field.path === "string" ? field.path : "";
  const label = typeof field.label === "string" ? field.label : path;
  const description = typeof field.description === "string" ? field.description : "";
  const type = typeof field.type === "string" ? field.type : "text";
  const required = field.required !== false;
  const placeholder = typeof field.placeholder === "string" ? field.placeholder : undefined;
  const min = typeof field.min === "string" ? field.min : undefined;
  const max = typeof field.max === "string" ? field.max : undefined;
  if (type === "choice") {
    const options = Array.isArray(field.options) ? field.options.map(asRecord) : [];
    return (
      <label key={path} className={widgetClassName(kind, widgetElementKeys.field, appearance)} style={widgetStyle(kind, widgetElementKeys.field, appearance)}>
        <span className={widgetClassName(kind, widgetElementKeys.fieldLabel, appearance)} style={widgetStyle(kind, widgetElementKeys.fieldLabel, appearance)}>{label}</span>
        {description ? <span className={widgetClassName(kind, widgetElementKeys.description, appearance)} style={widgetStyle(kind, widgetElementKeys.description, appearance)}>{description}</span> : null}
        <select className={widgetClassName(kind, widgetElementKeys.input, appearance)} style={widgetStyle(kind, widgetElementKeys.input, appearance)} name={path} required={required} disabled={disabled} defaultValue={typeof values[path] === "string" ? values[path] : undefined}>
          {options.map((option) => {
            const id = typeof option.id === "string" ? option.id : "";
            return <option key={id} value={id}>{typeof option.label === "string" ? option.label : id}</option>;
          })}
        </select>
      </label>
    );
  }
  return (
    <label key={path} className={widgetClassName(kind, widgetElementKeys.field, appearance)} style={widgetStyle(kind, widgetElementKeys.field, appearance)}>
      <span className={widgetClassName(kind, widgetElementKeys.fieldLabel, appearance)} style={widgetStyle(kind, widgetElementKeys.fieldLabel, appearance)}>{label}</span>
      {description ? <span className={widgetClassName(kind, widgetElementKeys.description, appearance)} style={widgetStyle(kind, widgetElementKeys.description, appearance)}>{description}</span> : null}
      <input
        className={widgetClassName(kind, widgetElementKeys.input, appearance)}
        style={widgetStyle(kind, widgetElementKeys.input, appearance)}
        name={path}
        type={toHtmlInputType(type)}
        placeholder={placeholder}
        min={min}
        max={max}
        defaultValue={typeof values[path] === "string" ? values[path] : undefined}
        required={required}
        disabled={disabled}
      />
    </label>
  );
}

function widgetClassName(kind: string, key: keyof typeof widgetElementKeys, appearance: AppearanceConfiguration | undefined) {
  return resolveWidgetElementClassName(kind, key, appearance);
}

function widgetStyle(kind: string, key: keyof typeof widgetElementKeys, appearance: AppearanceConfiguration | undefined) {
  return resolveWidgetInlineStyle(kind, key, appearance);
}

function toHtmlInputType(type: string) {
  if (type === "email" || type === "date" || type === "number") return type;
  return "text";
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}
