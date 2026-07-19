"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type FormFieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  /** Receives the ids to wire onto the control (id + aria-describedby). */
  children: (ids: { inputId: string; describedBy?: string }) => ReactNode;
};

/** Accessible field wrapper: associates label, hint and error with the control. */
export function FormField({
  label,
  required,
  hint,
  error,
  className,
  children,
}: FormFieldProps) {
  const inputId = useId();
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const describedBy =
    cn(hint ? hintId : undefined, error ? errorId : undefined) || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={inputId} className="text-sm text-text-secondary">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children({ inputId, describedBy })}
      {hint ? (
        <p id={hintId} className="text-caption text-text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-caption text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
